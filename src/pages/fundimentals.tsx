import React, { useState } from "react"
import {
  Electron,
  UpQuark,
  DownQuark,
  TopQuark,
  BottomQuark,
  StrangeQuark,
  CharmQuark,
  AntiUpQuark,
  AntiDownQuark,
  AntiTopQuark,
  AntiBottomQuark,
  AntiCharmQuark,
  AntiStrangeQuark,
  Positron,
  ElectronNeutrino,
  Tau,
  Muon,
  TauNeutrino,
  MuonNeutrino,
  ElectronAntiNeutrino,
  AntiTau,
  AntiMuon,
  TauAntiNeutrino,
  MuonAntiNeutrino,
  Photon,
  ZBoson,
  Gluon,
  PositiveWBoson,
  NegativeWBoson,
  ParticleType,
} from "wave-func"
import Layout from "../components/layout"
import { Fundimental } from "./../components"
import "./fundimentals.scss"

const fundimentalParticles = [
  new UpQuark(),
  new DownQuark(),
  new TopQuark(),
  new BottomQuark(),
  new StrangeQuark(),
  new CharmQuark(),
  new AntiUpQuark(),
  new AntiDownQuark(),
  new AntiTopQuark(),
  new AntiBottomQuark(),
  new AntiStrangeQuark(),
  new AntiCharmQuark(),

  new Electron(),
  new ElectronNeutrino(),
  new Tau(),
  new Muon(),
  new TauNeutrino(),
  new MuonNeutrino(),
  new Positron(),
  new ElectronAntiNeutrino(),
  new AntiTau(),
  new AntiMuon(),
  new TauAntiNeutrino(),
  new MuonAntiNeutrino(),
]

const bosons = [
  new Photon(),
  new Gluon(),
  new ZBoson(),
  new PositiveWBoson(),
  new NegativeWBoson(),
]

export default () => {
  const [displayType, setDisplayType] = useState<"grid" | "singular">("grid")
  const [singularParticle, setSingularParticle] = useState<undefined | number>()
  const [displayAntiMatter, setDisplayAntiMatter] = useState<boolean>(false)

  if (singularParticle) {
    return (
      <Layout>
        <div className="singular-particle-box">
          <div
            className="button"
            onClick={event => {
              event.preventDefault()
              singularParticle > 0 && setSingularParticle(singularParticle - 1)
            }}
          >
            prev
          </div>
          <Fundimental
            onClick={() => {}}
            particle={fundimentalParticles[singularParticle]}
          />
          <div
            className="button"
            onClick={event => {
              event.preventDefault()
              singularParticle < fundimentalParticles.length &&
                setSingularParticle(singularParticle + 1)
            }}
          >
            next
          </div>
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <h1 className="title">The Fundimental Particles</h1>
      <button
        onClick={event => {
          event.preventDefault()
          setDisplayAntiMatter(!displayAntiMatter)
        }}
      >
        Anti Matter
      </button>
      <h1 className="title">Fermions</h1>
      <h3 className="title">Quarks</h3>
      <div className={`particles-box display-type-${displayType}`}>
        {fundimentalParticles
          .filter(
            particle =>
              particle.antiMatter === displayAntiMatter &&
              particle.type === ParticleType.QUARK
          )
          .map((particle, index) => (
            <Fundimental
              onClick={() => {
                setDisplayType("singular")
                setSingularParticle(index)
              }}
              key={particle.name}
              particle={particle}
            />
          ))}
      </div>
      <h3 className="title">Leptons</h3>
      <div className={`particles-box display-type-${displayType}`}>
        {fundimentalParticles
          .filter(
            particle =>
              particle.antiMatter === displayAntiMatter &&
              particle.type === ParticleType.LEPTON
          )
          .map((particle, index) => (
            <Fundimental
              onClick={() => {
                setDisplayType("singular")
                setSingularParticle(index)
              }}
              key={particle.name}
              particle={particle}
            />
          ))}
      </div>
      <h1 className="title">Bosons</h1>
      <div className="bosons-box">
        {bosons.map(particle => (
          <Fundimental
            onClick={() => {
              setDisplayType("singular")
              // setSingularParticle(particle);
            }}
            key={particle.name}
            particle={particle}
          />
        ))}
      </div>
    </Layout>
  )
}
