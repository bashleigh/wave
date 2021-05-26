import React, { useState } from 'react'
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
} from 'wave-func'
import { Fundimental } from './../components'
import './fundimentals.scss'

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

export default () => {

  const [displayType, setDisplayType] = useState<'grid' | 'singular'>('grid');
  const [singularParticle, setSingularParticle] = useState<undefined | string>();
  const [displayAntiMatter, setDisplayAntiMatter] = useState<boolean>(false);
  
  return (
    <>
      <h1>The Fundimental Particles</h1>
      <button onClick={event => {
        event.preventDefault();
        setDisplayAntiMatter(!displayAntiMatter);
      }}>Anti Matter</button>
      <div className={`particles-box display-type-${displayType}`}>
        {fundimentalParticles.filter(particle => particle.antiMatter === displayAntiMatter).map(particle => (
          <Fundimental onClick={() => {
            setDisplayType('singular');
            setSingularParticle(particle.name);
          }} key={particle.name} particle={particle} />
        ))}
      </div>
    </>
  )
}