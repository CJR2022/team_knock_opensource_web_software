import HeroBanner from "../components/HeroBanner";
import CategorySidebar from "../components/CategorySidebar";
import ItemGrid from "../components/ItemGrid";
import { categories, items } from "../data";


export default function MainPage() {
    return(

        <main className="page">
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
