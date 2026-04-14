export const Loading = () => {
    return (
        <div
        className={`
            flex items-center justify-center w-full h-[500px]`}
        >
            <div className="flex items-center justify-center flex-1">
                <div className="flex flex-row gap-2">
                    <div className="neu w-4 h-4 rounded-full bg-[var(--color-theme)] animate-bounce [animation-delay:.1s]"></div>
                    <div className="neu w-4 h-4 rounded-full bg-[var(--color-theme)] animate-bounce [animation-delay:.2s]"></div>
                    <div className="neu w-4 h-4 rounded-full bg-[var(--color-theme)] animate-bounce [animation-delay:.3s]"></div>
                    <div className="neu w-4 h-4 rounded-full bg-[var(--color-theme)] animate-bounce [animation-delay:.2s]"></div>
                    <div className="neu w-4 h-4 rounded-full bg-[var(--color-theme)] animate-bounce [animation-delay:.1s]"></div>
                </div>
            </div>
        </div>
    );
};
