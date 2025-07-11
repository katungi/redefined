import { For, createSignal, onMount, onCleanup } from 'solid-js';
import { themeManager, type ThemeName, colorThemes } from '~/lib/themeManager';
import styles from './ColorfulText.module.css';

interface ColorfulTextProps {
    text: string;
    class?: string;
    fontSize?: 'small' | 'medium' | 'large' | 'title';
    fontWeight?: 'light' | 'medium' | 'bold' | 'bolder';
}

export function ColorfulText(props: ColorfulTextProps) {
    const [currentTheme, setCurrentTheme] = createSignal<ThemeName>(themeManager.getCurrentTheme());
    const [currentMode, setCurrentMode] = createSignal<'light' | 'dark'>(themeManager.getCurrentMode());
    const [hoveredIndex, setHoveredIndex] = createSignal<number | null>(null);

    // Map each letter to a theme - "Daniel" = 6 letters, 6 themes
    const letterThemeMap: ThemeName[] = ['default', 'bubblegum', 'catpuccin', 'softpop', 't3', 'vercel'];

    const handleThemeChange = (theme: ThemeName, mode: 'light' | 'dark') => {
        setCurrentTheme(theme);
        setCurrentMode(mode);
    };

    onMount(() => {
        // Initialize current mode
        setCurrentMode(document.documentElement.classList.contains('dark') ? 'dark' : 'light');

        // Listen for theme changes
        themeManager.addListener(handleThemeChange);

        // Listen for light/dark mode toggles
        const observer = new MutationObserver(() => {
            setCurrentMode(document.documentElement.classList.contains('dark') ? 'dark' : 'light');
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class']
        });

        onCleanup(() => {
            themeManager.removeListener(handleThemeChange);
            observer.disconnect();
        });
    });

    const handleLetterClick = (index: number) => {
        const themeName = letterThemeMap[index];
        if (themeName) {
            themeManager.setTheme(themeName);
        }
    };

    const getLetterColor = (index: number) => {
        const themeName = letterThemeMap[index];
        if (!themeName) return 'var(--colorForeground)';

        return colorThemes[themeName][currentMode()].colorEmphasized;
    };

    const getCurrentThemeIndex = () => {
        return letterThemeMap.indexOf(currentTheme());
    };

    const letters = props.text.split('');

    return (
        <span
            class={`${styles.colorfulText} ${props.class || ''}`}
            data-font-size={props.fontSize}
            data-font-weight={props.fontWeight}
        >
            <span class={styles.letterContainer}>
                {/* Animated dot indicator */}
                <span
                    class={styles.indicator}
                    style={{
                        transform: `translateX(${getCurrentThemeIndex() * 100}%)`,
                        background: getLetterColor(getCurrentThemeIndex())
                    }}
                />

                <For each={letters}>
                    {(letter, index) => (
                        <span
                            class={styles.letter}
                            style={{
                                color: letter === ' ' ? 'transparent' : getLetterColor(index()),
                                cursor: letter === ' ' ? 'default' : 'pointer',
                                transform: hoveredIndex() === index() ? 'scale(1.1) translateY(-2px)' : 'scale(1)',
                                'text-shadow': hoveredIndex() === index() ? '0 0 20px currentColor' :
                                    getCurrentThemeIndex() === index() ? '0 2px 8px currentColor' : 'none'
                            }}
                            onMouseEnter={() => setHoveredIndex(index())}
                            onMouseLeave={() => setHoveredIndex(null)}
                            onClick={() => letter !== ' ' && handleLetterClick(index())}
                        >
                            {letter === ' ' ? '\u00A0' : letter}
                        </span>
                    )}
                </For>
            </span>
        </span>
    );
} 