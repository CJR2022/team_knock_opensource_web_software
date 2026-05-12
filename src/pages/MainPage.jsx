import HeroBanner from "../components/HeroBanner";
import CategorySidebar from "../components/CategorySidebar";
import ItemGrid from "../components/ItemGrid";
import { categories, items } from "../data";


export default function MainPage() {
    return(

        <main className="flex-1 max-w-[1400px] w-full mx-auto px-4 py-8">
            <HeroBanner />
            <div className="flex flex-col gap-6">
            <CategorySidebar categories={categories} />
            <section>
                <ItemGrid items={items} />
            </section>
            </div>
        </main>
    );
}