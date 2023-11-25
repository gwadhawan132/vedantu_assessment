import React from 'react'
import './Result.css'
import ResultCard from '../resultCard/ResultCard'


export default function Result() {
  return (
    <div className='result'>
        <div className="result_container">
            <div className="result_top">
                <div className="result_top_left">
                   <div className="result_txt1">Inspired student . Inspired <span className="result_span"> results</span></div> 
                    <span className="result_txt2">Our results reflect the passion,hardwork and efforts of our students and teachers.</span>
                    <div className="result_top_lower">
                        <button className="results_btn1">Explre courses</button>
                        <button className="results_btn2">View our results</button>
                    </div>
                </div>
                <div className="result_top_right">
                    <img className='result_img' src="./images/student.png" alt="" />
                </div>
            </div>
            <div className="result_bottom">
                <ResultCard/>
            </div>
        </div>
    </div>
  )
}
