import Link from 'next/link';

// const linkStyle= {
//     marginRight: '10px',
//     textDecoration: 'none',
//     fontSize: '18px',
//     color: '#fff',
// }
const headerStyle= {
    height: '50px',
    backgroundColor: '#69B0AC',
    lineHeight: '50px',
    textAlign: 'center',
}
const Header = () => {
    return (
        <div style={headerStyle}>
            <Link href="/"><a>home</a></Link>
            <Link href="/about"><a>about</a></Link>
            <style jsx>{`
            a {
                text-decoration: none;
                color: #fff;
                fontSize: '18px';
                margin-right: 10px;
            }
            a:hover {
                color: #000;
            }
        `}</style>
        </div>
    )
}

export default Header;