import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <h1>Projeto do Persima</h1>
        <ol>
          <li>
            Pedro Atividade 1 <Link href="/pedroAtividade1"><code>src/app/pedroAtividade1/page.tsx</code>.</Link>
          </li>
          <li>
            Pedro Atividade 2 <Link href="/pedroAtividade2"><code>src/app/pedroAtividade2/page.tsx</code>.</Link>
          </li>
          <li>
            Material UI Atividade 3 <Link href="/materialUiAtividade3"><code>src/app/materialUiAtividade3/page.tsx</code>.</Link>
          </li>
          <li>
            NextJS Tags Atividade 3 <Link href="/nextJsTagsAtividade3"><code>src/app/nextJsTagsAtividade3/page.tsx</code>.</Link>
          </li>
          <li>
            Exemplo UseState <Link href="/exemploUseState"><code>src/app/exemploUseState/page.tsx</code>.</Link>
          </li>
          <li>
            Atividade 5 
            <ul>
              <li>                
                Render Condicional Lista React 1 <Link href="/atividade5/renderCondicionalListaReact1"><code>src/app/atividade5/renderCondicionalListaReact1/page.tsx</code>.</Link>
              </li>
              <li>                
                Render Condicional Lista React 2 <Link href="/atividade5/renderCondicionalListaReact2"><code>src/app/atividade5/renderCondicionalListaReact2/page.tsx</code>.</Link>
              </li>
              <li>                
                Render Condicional Lista React 3 <Link href="/atividade5/renderCondicionalListaReact3"><code>src/app/atividade5/renderCondicionalListaReact3/page.tsx</code>.</Link>
              </li>
              <li>                
                Render Condicional  React 1 <Link href="/atividade5/renderCondicionalReact1"><code>src/app/atividade5/renderCondicionalReact1/page.tsx</code>.</Link>
              </li>
              <li>                
                Render Condicional  React 2 <Link href="/atividade5/renderCondicionalReact2"><code>src/app/atividade5/renderCondicionalReact2/page.tsx</code>.</Link>
              </li>
              <li>                
                Render Condicional  React 3 <Link href="/atividade5/renderCondicionalReact3"><code>src/app/atividade5/renderCondicionalReact3/page.tsx</code>.</Link>
              </li>
              <li>                
                Render Condicional  React 4 <Link href="/atividade5/renderCondicionalReact4"><code>src/app/atividade5/renderCondicionalReact4/page.tsx</code>.</Link>
              </li>
              <li>                
                Render Condicional  React 5 <Link href="/atividade5/renderCondicionalReact5"><code>src/app/atividade5/renderCondicionalReact5/page.tsx</code>.</Link>
              </li>
            </ul>
          </li>
        </ol>

        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="https://github.com/PerSiMa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="https://cdn.worldvectorlogo.com/logos/github-icon-1.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Meu Github
          </a>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            Documentação do Next
          </a>
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Aprenda
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examplos
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Visite nextjs.org →
        </a>
      </footer>
    </div>
  );
}
