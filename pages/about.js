import MyLayout from '../comps/MyLayout'

const About = () => {
    return (
        <MyLayout>
            <h4>is a demo about next.js</h4>
            <style jsx>{`
                h4 {
                    color: #00AA90;
                }
            
            `}
            </style>
        </MyLayout>
    )
}
export default About;