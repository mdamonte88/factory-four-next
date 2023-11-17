import './styles/main.css'
import styles from './styles/page.module.css'
import StatusComponent from './components/StatusContainer'

export default function Home() {
  return (
    <main className={styles.main}>
      <StatusComponent
          key='accounts'
          apiName='accounts'
          success={true}
          message='Test success'
          hostname='Test hostname'
          time={0}
      />
    </main>
  )
}
