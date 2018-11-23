import { withRouter } from 'next/router';
import MyLayout from '../comps/MyLayout';
import fetch from 'isomorphic-unfetch';

const Post = (props) => {
    return (
        <MyLayout>
            <h3>{props.show.name}</h3>
            {/*replace(/<[/]?p>/g, '') 去掉文章中的p标签*/}
            <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
            <img src={props.show.image.medium}/>
            <style jsx global>{`
                h3 {
                    color: #00AA90;
                }

                p {
                    color: #69B0AC;
                    font-size: '22px
                }
            `}</style>
        </MyLayout>
    )
}
// 注意这里的cotext为上下文，不能更改名称
Post.getInitialProps = async function(context) {
    const { id } = context.query;
    const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
    const data = await res.json();
    // console.log(data)
    return {
        show: data,
    }
}
  
export default Post;