import Layout from '../components/layout'
import { Timer } from '../components/timer'

export default function Index() {
  return (
    <Layout title="Home | Devero" pageName="homepage">
      <div className="dashboard__header">
        <div className="dashboard__content">
          <h1 className="display-2 font-bebas">DEVERO Corporation</h1>

          <h2 className="lead">Build successful products and companies better, faster and more intelligently.</h2>

          <p>9 out of 10 start-ups fail. We will help you be part of that 10% of start-ups that succeed. With our expertise and experience, you can improve the odds of your success.</p>

          <div className="row justify-content-center">
            <div className="col-md-8">
              <Timer />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
