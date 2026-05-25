import Card from "./card";

type Item = {
    photo: string;
    name: string;
    description: string;
};

type Props = {
    items: Item[];
};

export default function CardsGrid({ items }: Props) {
    return (
        <section className="w-full flex justify-center py-12">
            <div className="w-full max-w-7xl px-4 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-fr">
                {items.map((it, index) => (
                    <div key={`${it.name}-${index}`} className="w-full h-full">
                        <Card {...it} />
                    </div>
                ))}
            </div>
        </section>
    );
}
