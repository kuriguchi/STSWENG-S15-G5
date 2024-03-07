import { useLocation, Link } from 'react-router-dom';

const Breadcrumbs = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);
    console.log(pathnames);

    return (
        <div>
            {pathnames.map((value, index) => {
                const to = `/${pathnames.slice(0, index + 1).join('/')}`;

                return (
                    <span key={to}>
                        {' / '}
                        <Link to={to}>{value}</Link>
                    </span>
                );
            })}
        </div>
    );
};

export default Breadcrumbs;
