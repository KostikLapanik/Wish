import { useState } from "react";
import { Filter } from "./Filter/Filter";
import { Wishes } from "./Wishes/Wishes";

export function WishlistsPage() {
    // Todo: ленивая подгрузка

    const [isFiltersOpen, setIsFiltersOpen] = useState(false);

    return (
        <>
            <Filter isFiltersOpen={isFiltersOpen} setIsFiltersOpen={setIsFiltersOpen} />
            <Wishes isFiltersOpen={isFiltersOpen} />
        </>
    )
}