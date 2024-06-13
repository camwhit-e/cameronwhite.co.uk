import Breadcrumb from "./Breadcrumb";

interface Props {
    title: string;
    items: string[];
}

const Header = ({ items, title }: Props) => (
    <h1 className={'text-2xl lg:text-5xl font-semibold lg:text-right text-gray-200'}>
        {title}
        {items.length > 0 && (
            <Breadcrumb items={items} />
        )}
    </h1>
);

export default Header;
