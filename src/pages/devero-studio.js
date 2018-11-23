import React from 'react'

import Layout from '../components/layout'

const DeveroStudio = () => (
  <Layout>
    <section className="studio--benefits">
      <h1>Design + Development + Managament</h1>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
    </section>

    <button>What we do</button>

    <section className="studio--benefits">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-4">1</div>

          <div className="col-md-6 col-lg-4">2</div>

          <div className="col-md-6 col-lg-4">3</div>

          <div className="col-md-6 col-lg-4">4</div>

          <div className="col-md-6 col-lg-4">5</div>
        </div>
      </div>
    </section>

    <section className="studio--split">
      <div className="container">
        <div className="row">
          <div className="col-md-6">Content</div>

          <div className="col-md-6">image</div>
        </div>
      </div>
    </section>

    <div className="studio--testimonial">
      <div className="container">
        <blockquote><p>Testimonial</p></blockquote>

        <cite>&mdash;Author</cite>
      </div>
    </div>

    <section className="studio--split">
      <div className="container">
        <div className="row">
          <div className="col-md-6">Content</div>

          <div className="col-md-6">image</div>
        </div>
      </div>
    </section>

    <div className="studio--testimonial">
      <div className="container">
        <blockquote><p>Testimonial</p></blockquote>

        <cite>&mdash;Author</cite>
      </div>
    </div>

    <section className="studio--split">
      <div className="container">
        <div className="row">
          <div className="col-md-6">Content</div>

          <div className="col-md-6">image</div>
        </div>
      </div>
    </section>

    <div className="studio--testimonial">
      <div className="container">
          <blockquote><p>Testimonial</p></blockquote>

          <cite>&mdash;Author</cite>
      </div>
    </div>

    <section className="studio--contact">
      <form action="">
        <fieldset>
          <label htmlFor="">Full name</label>

          <input type="text" name="" id="" />
        </fieldset>

        <fieldset>
          <label htmlFor="">Email address</label>

          <input type="text" name="" id="" />
        </fieldset>

        <h2>What are you interested in?</h2>

        <div className="row">
          <div className="col-md-6">
            <fieldset>
              <label htmlFor="">
                <input type="checkbox" name="" id="" />

                <span>Frontend / Backend</span>
              </label>
            </fieldset>
          </div>

          <div className="col-md-6">
            <fieldset>
              <label htmlFor="">
                <input type="checkbox" name="" id="" />

                <span>Design</span>
              </label>
            </fieldset>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <fieldset>
              <label htmlFor="">
                <input type="checkbox" name="" id="" />

                <span>App</span>
              </label>
            </fieldset>
          </div>

          <div className="col-md-6">
            <fieldset>
              <label htmlFor="">
                <input type="checkbox" name="" id="" />

                <span>Consultation</span>
              </label>
            </fieldset>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <fieldset>
              <label htmlFor="">
                <input type="checkbox" name="" id="" />

                <span>Something Else</span>
              </label>
            </fieldset>
          </div>
        </div>

        <h2>Want to add something?</h2>

        <textarea name="" id=""></textarea>

        <fieldset>
          <label htmlFor="">
            <input type="checkbox" name="" id="" />

            <span>Yes, I want to be informed about new tech, design & business articles.</span>
          </label>
        </fieldset>

        <fieldset>
          <button>Send</button>
        </fieldset>
      </form>
    </section>
  </Layout>
)

export default DeveroStudio
