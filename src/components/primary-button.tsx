export default function PrimaryButton() {
    return (
        <button className='primary-button font-[var(--font-fira-sans)]'>
            Hire me
            <svg>
                <defs>
                    <filter id='glow'>
                        {/* @ts-ignore */}
                        <fegaussianblur result='coloredBlur' stdDeviation='5'></fegaussianblur>
                        {/* @ts-ignore */}
                        <femerge>
                            {/* @ts-ignore */}
                            <femergenode in='coloredBlur'></femergenode>
                            {/* @ts-ignore */}
                            <femergenode in='coloredBlur'></femergenode>
                            {/* @ts-ignore */}
                            <femergenode in='coloredBlur'></femergenode>
                            {/* @ts-ignore */}
                            <femergenode in='SourceGraphic'></femergenode>
                            {/* @ts-ignore */}
                        </femerge>
                    </filter>
                </defs>
                <rect />
            </svg>
        </button>
    )
}
