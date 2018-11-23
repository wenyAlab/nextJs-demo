import Link from 'next/link';
import MyLayout from '../comps/MyLayout';
import fetch from 'isomorphic-unfetch';

const Index = (props) => (
    <MyLayout>
        <h1>文章列表</h1>
        <ul>
            {
                props.show.map(({show}) => (
                    <li key={show.id}>
                        <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
                            <a>{show.name}</a>
                        </Link>
                    </li>
                ))
            }
        </ul>
        <style jsx>{`
            h1 {
                color: #00AA90;
            }
            ul {
                padding: 0;
              }
        
            li {
                list-style: none;
                margin: 5px 0;
            }

            a {
                text-decoration: none;
                color: #69B0AC;
                font-size: 22px;
            }
        `}</style>
    </MyLayout>
)

Index.getInitialProps = async function () {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
    const data = await res.json();
    // console.log(data.length);
    return {
        show: data
    }
}
export default Index;