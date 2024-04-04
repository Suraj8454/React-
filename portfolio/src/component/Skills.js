import React from 'react'
import './Skills.css'
import CountUp from 'react-countup'

// example
{/* <CountUp start={0} end={100} delay={0} duration={2} /> */}
export default function Skills() {
  return (
    <>
      <div className='skill'>
        <div className='heading'>
          <h1>My <span>Skill</span></h1>
        </div>
        <div className='personal'>
          <div className='subject'>
            <div className='top'>
              <h2>Technical Skills</h2>
              <div className='line_top'></div>
            </div>
            <div className='language'>
              <h3><img src='./photos/html.jpeg' height="20px" width="20px" />Html</h3>
              <div className='flex'>
                <div className='progessline'>
                  <div className='line line_html'></div>
                </div>
                <h4><CountUp start={0} end={90} delay={0} duration={2}/>%</h4 >
              </div>
            </div>
            <div className='language'>
              <h3><img src='./photos/css.jpeg' height="20px" width="20px" />Css</h3>
              <div className='flex'>
              <div className='progessline'>
                <div className='line line_css'></div>
              </div>
              <h4><CountUp start={0} end={75} delay={0} duration={2}/>%</h4 >
              </div>
            </div>
            <div className='language'>
              <h3><img src='./photos/js.jpeg' height="20px" width="20px" />Javascript</h3>
              <div className='flex'>
              <div className='progessline'>
                <div className=' line line_js'></div>
              </div>
              <h4><CountUp start={0} end={80} delay={0} duration={2}/>%</h4 >
              </div>
            </div>
            <div className='language'>
              <h3><img src='./photos/react.jpeg' height="20px" width="20px" />React Js</h3>
              <div className='flex'>
              <div className='progessline'>
                <div className=' line line_react'></div>
              </div>
              <h4><CountUp start={0} end={70} delay={0} duration={2}/>%</h4 >
              </div>
            </div>
            <div className='language'>
              <h3><img src='./photos/newjava.jpeg' height="20px" width="40px" />Java</h3>
              <div className='flex'>
              <div className='progessline'>
                <div className=' line line_java'></div>
              </div>
              <h4><CountUp start={0} end={60} delay={0} duration={2}/>%</h4 >
              </div>
            </div>
            <div className='language'>
              <h3><img src='./photos/python.jpeg' height="20px" width="20px" />Python</h3>
              <div className='flex'>
              <div className='progessline'>
                <div className=' line line_python'></div>
              </div>
              <h4><CountUp start={0} end={40} delay={0} duration={2}/>%</h4 >
              </div>
            </div>
          </div>


          <div className='info'>
            <div className='top'>
              <h2>Professional Skills</h2>
              <div className='line_top ps'></div>
            </div>
            <div className='container_component'>
              <div className='component'>
                <div className='circle'>
                  <div className='undercircle_90'>
                    <h4><CountUp start={0} end={90} delay={0} duration={4} />%</h4 >
                  </div>
                </div>
                <div className='circle_end'>Web Design</div>
              </div>
              <div className='component'>
                <div className='circle'>
                  <div className='undercircle_40'>
                    <h4><CountUp start={0} end={40} delay={0} duration={4} />%</h4 >
                  </div>
                </div>
                <div className='circle_end'>Problem Solving</div>
              </div>
              <div className='component'>
                <div className='circle'>
                  <div className='undercircle_70'>
                    <h4><CountUp start={0} end={70} delay={0} duration={4} />%</h4 >
                  </div>
                </div>
                <div className='circle_end'>Creativity</div>
              </div>
              <div className='component'>
                <div className='circle'>
                  <div className='undercircle_50'>
                    <h4><CountUp start={0} end={50} delay={0} duration={4} />%</h4 >
                  </div>
                </div>
                <div className='circle_end'>Communication</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
