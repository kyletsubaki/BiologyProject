function classList(...classes: (string | [className: string, condition: boolean])[]): string {
    return classes
        .map(e => typeof e === 'string' ? e : e[1] ? e[0] : null)
        .filter(e => e !== null)
        .join(' ');
}

type Setter<T> = (value: T) => void;

export { classList };
export type { Setter };
