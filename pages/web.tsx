import Layout from './../components/layout'
import { PageHeader } from './../components/page-header'

const Web = () => (
  <Layout title="Web design & development | Devero">
    <PageHeader title="Web design & development" />

    <div className="pb-3">
      <h2 className="h3">Our Approach</h2>

      <p></p>

      <h2 className="h3">Technology</h2>

      <p>React, Next.js, Node.js, MongoDB, Firestore, PostgreSQL, SQL, Heroku, AWS, Rest, GraphQL.</p>

      <h2 className="h3">How can we help you</h2>

      <h3 className="h4">Creating new solutions from scratch</h3>

      <p>Got a great idea, but your team lacks the time or skill capacity to deliver quickly? We handle the process—from market research, strategy and customer insights to visual design, software development and quality assurance testing.</p>

      <h3 className="h4">Improving your current website</h3>

      <p>Have a website that needs to get to the next level? We analyze your current website, solve any existing issues, provide insights and improve what is needed, such as speed, security, capabilities, design and user experience.</p>

      <h3 className="h4">Supporting your team with experts</h3>

      <p>Looking for a reliable helping hand to get things done fast? With absolute flexibility on our end, we integrate our talent seamlessly with your in-house team to accelerate your project and help you grow.</p>
    </div>
  </Layout>
)

export default Web
