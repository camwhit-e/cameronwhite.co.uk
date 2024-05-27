import Breadcrumb from "./Breadcrumb";

interface Props {
    title: string;
    items: string[];
}

export default ({ items, title }: Props) => (
    <h1 className={'text-2xl lg:text-5xl font-semibold lg:text-right'}>
        {title}
        {items.length > 0 && (
            <Breadcrumb items={items} />
        )}
    </h1>
)