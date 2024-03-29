import { Col } from "react-bootstrap"

export const ProjectCard = ({title,description,imgUrl}) =>{
  
    return(
        <Col sm={6} md={4}>
         <div className="proj-imgbx">
            <img src={imgUrl} alt="alt" />
            <div className="proj-txtx">
                <h4>{title}</h4>
                <h4>{description}</h4>
            </div>
         </div>
        </Col>
    )

}