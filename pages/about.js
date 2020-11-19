import { withRouter } from 'next/router'

const About = withRouter((props) => {
  return(
    <div>
      <h1>{props.router.query.title}</h1>
      <p>this is the about page</p>
    </div>
  )
})

export default About;