import React from 'react';
import profilePicture from "../../../static/assets/images/auth/login.jpg";

export default function() {
    return (
        <div className="content-page-wrapper">
            <div 
                className="left-column"
                style={{
                    background: "url(" + profilePicture + ") no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
            />
            <div className="right-column">
                <p>
                    Said the dead cat, "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo quia incidunt dolorem aspernatur unde provident praesentium iusto. Sapiente quia repudiandae nobis veritatis distinctio, inventore magni laboriosam, facilis nihil quam cumque.
                    Dignissimos quia fuga sint cupiditate sequi rem, aut corrupti pariatur assumenda vitae hic sit et necessitatibus qui omnis similique consectetur saepe repellendus! Commodi quaerat atque, praesentium reiciendis assumenda officiis aliquam.
                    Tenetur maxime quis, iure enim illo placeat autem facere explicabo rem voluptatum, excepturi saepe alias iusto quo voluptates architecto. Tempora quibusdam at quidem dolore odio delectus distinctio
                    sed."
                </p>
            </div>
        </div>
    )
} 