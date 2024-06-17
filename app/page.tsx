import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Hi, I'm Nevin 👋
      </h1>
      <p className="mb-4">
        {`I'm a software engineer and academic researcher. I am currently working at Leafpress, where we help large property managers collect and report carbon emissions.
        Previously, I was a student at the UCLA, studying CS and EE. My current research interests include Deep RL and adversarial robustness for ML. Outside of work, I enjoy photography and snowboarding.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
