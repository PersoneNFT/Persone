export default function SearchBox(): JSX.Element {
    return (
        <>
            <div className="widget widget-search mgbt-24">
                <form>
                    <input
                        type="text"
                        placeholder="Enter your word art"
                        required
                    />
                    <button>
                        <i className="icon-fl-search-filled" />
                    </button>
                </form>
            </div>
        </>
    );
}
