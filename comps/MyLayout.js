import Header from './Header';

const layoutStyle = {
    // margin: '20px',
    // padding: '20px',
    // border: '1px solid #ccc',
    // height: '100vh',
}
const MyLayout = (props) => {
    return (
        <div style={layoutStyle}>
            <Header/>
            <div className="main">
                {
                    props.children
                }
            </div>
            {/*global styles*/}
            <style jsx global>{`
                body {
                    margin: 0px;
                    padding: 0px;
                }
                .main {
                    max-width: 1000px;
                    margin: 0 auto;
                }
            `}</style>
        </div>
    )
}

export default MyLayout;