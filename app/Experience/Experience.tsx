import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons'
import { faSquarePhone, faSquareEnvelope } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react"
import "./Experience.css"
import Job from "./Job.tsx"

export default function About() {
    

    return (
        <div id="experience" className="exp-container">
            <div className="exp-title">
                <h1 className="title">Experience</h1>
            </div>
            <div>
                <Job
                    title={"Salesforce CRM Student"}
                    description={"Utilized advanced attention to detail and data modeling skills to develop division overview dashboards, providing a comprehensive analysis of key performance indicators, profitability, and other metrics. This initiative empowered management teams to make data-driven decisions that improved operational efficiency and strategic planning. The dashboards also enabled real-time tracking of performance, offering greater transparency and insights into the business's financial health and overall performance."}
                    where="Brampton"
                    company="United Services Group"
                    when="June 2024 - Sept 2024"
                />
                <Job
                    title={"Backend Salesforce Developer"}
                    description={"Leveraged strong technical expertise in Salesforce development to establish and streamline data entry processes, creating an intuitive and efficient resource that guided employees through daily tasks. Additionally, developed a quality control system that enabled managers to assess service delivery with enhanced precision, ensuring compliance with company standards and contributing to a higher level of service excellence."}
                    where="Brampton"
                    company="United Services Group"
                    when="June 2023 - Sept 2023"
                />
                <Job
                    title={"Partnership Division Payroll"}
                    description={"Played a pivotal role in improving payroll efficiency by assisting with accurate and timely payroll calculations for a diverse range of contractors. Developed a highly effective recursive algorithm in Java that automated and optimized the payroll process. By reducing the dependency on manual calculations and integrating user-inputted shift schedules, the solution not only enhanced accuracy but also saved valuable time."}
                    where="Brampton"
                    company="United Services Group"
                    when="June 2022 - Sept 2022"
                />
            </div>
        </div>
    )
}