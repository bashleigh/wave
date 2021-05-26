import React from "react"
import { AbstractParticle } from "wave-func"
import "./fundimental.scss"

export const Fundimental = ({
  particle,
  onClick,
}: {
  particle: AbstractParticle
  onClick?: () => void
}) => (
  <div className="card" onClick={() => onClick && onClick()}>
    <div
      className={`particle is-${particle.group.replace(" ", "-")} ${
        particle.type ? `is-${particle.type}` : ""
      } is-${particle.antiMatter ? "antimatter" : "matter"}`}
    >
      <h2 className="title">{particle.name}</h2>
      <div className="particle-symbol">
        <p>{particle.symbol}</p>
      </div>
      <div className="particle-info">
        <div>Spin: {particle.spin}</div>
        <div>Charge: {particle.chargeForHumans}</div>
        <div>Mass: {particle.mass}</div>
        <div>
          Applied forces:{" "}
          {particle.appliedForces.map(force => (
            <span key={`${particle.name}-${force}`}>{force}</span>
          ))}
        </div>
        {particle.scalar && <div>Scalar</div>}
      </div>
    </div>
  </div>
)
