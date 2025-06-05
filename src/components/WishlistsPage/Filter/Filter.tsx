export function Filter() {
    return (
        <section>
            <form action="">
                <select name="market" id="" title="Choose market"></select>

                <label htmlFor="price"></label>
                <input type="number" id="price" title="Price" placeholder="Price" />

                <select name="country" id="" title="country"></select>

                <label htmlFor="ownerName"></label>
                <input type="text" id="ownerName" title="ownerName" />
            </form>
        </section>
    )
}