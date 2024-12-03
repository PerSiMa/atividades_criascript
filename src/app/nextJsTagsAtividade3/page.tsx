import { Button } from '@mui/material'
import Link from 'next/link'
import Image from 'next/image'
import CriaImg from './criaScript.jpg'
import Script from 'next/script'

export default function Pedro1() {
  return (

    <>
      <Link style={{ width: '300px', height: '100px', backgroundColor: 'red', fontSize: '14px' }} href="/pedroAtividade1">
        <p>Link página Pedro Atividade 1 - CSS / Display Flex</p>
      </Link>

      <Link href="/pedroAtividade2">
        <div style={{ width: '300px', height: '100px', backgroundColor: 'red', fontSize: '14px' }}>Link página Pedro Atividade 2 - CSS / grid</div>
      </Link>

      <div>
        <Image
          src={CriaImg}
          alt="Foto do cria"
        />
      </div>

      {/* serve para Load de scripts, não sei como dar um exemplo melhor sobre, ainda não tenho experiência com scripts em javascript */}
      <div style={{ width: '300px', height: '100px' }}>
      <Script src="https://example.com/script.js" />
      </div>

    </>

  )
}