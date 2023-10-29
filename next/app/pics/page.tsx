import PicsCard from '../components/PicsCard'
import PicsSection from '../components/PicsSection'

export default function Pics() {
  return (
    <>
      <PicsSection date={new Date('10-01-2023')}>
        <PicsCard />
        <PicsCard />
        <PicsCard />
        <PicsCard />
        <PicsCard />
        <PicsCard />
        <PicsCard />
        <PicsCard />
        <PicsCard />
      </PicsSection>
      <PicsSection date={new Date('9-01-2023')}>
        <PicsCard />
        <PicsCard />
        <PicsCard />
        <PicsCard />
        <PicsCard />
      </PicsSection>
      <PicsSection date={new Date('8-01-2023')}>
        <PicsCard />
        <PicsCard />
        <PicsCard />
      </PicsSection>
    </>
  )
}
