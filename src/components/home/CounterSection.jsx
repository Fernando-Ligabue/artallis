import Counter from "./Counter"

const CounterSection = () => {
  return (
    <section className='w-full max-w-screen-xl px-20 lg:px-28 rounded-e-full my-10 py-24 bg-gradient-to-r from-artRed-50/90 to-artMagenta-50/80 flex flex-col sm:flex-row sm:justify-between gap-10'>
        <Counter text="Professores Profissionais" value={15} />
        <Counter text="Turmas" value={22} />
        <Counter text="Alunos" value={400} />
        <Counter text="Aulas de Música" value={8} />
    </section>
  )
}

export default CounterSection