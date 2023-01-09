import classNames from 'classnames';
import Link from 'next/link';

import { useMenusQuery } from 'generated/graphql';

interface NavigationProps {
  className?: string;
}

export const Navigation = ({ className }: NavigationProps) => {
  const { data, loading, error } = useMenusQuery();
  const pages = data?.menus.edges[0].node.items;

  return (
    <nav className={classNames(className, 'flex items-center pl-0 lg:pl-4')}>
      <span className="px-2 py-2 lg:py-0">
        <Link href="/">Home</Link>
      </span>
      {!loading && !error
        ? pages.map((page) => (
            <span key={page.id} className="px-2 py-2 lg:py-0">
              <Link href={`${page.name.toLocaleLowerCase()}`}>{page.name}</Link>
            </span>
          ))
        : null}
    </nav>
  );
};
