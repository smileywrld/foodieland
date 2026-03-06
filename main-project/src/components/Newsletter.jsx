
const Newsletter = () => {
  return (
    <div><section className="bg-blue-100 py-16 text-center rounded-3xl mt-20">

<h2 className="text-3xl font-bold">
Deliciousness to your inbox
</h2>

<p className="text-gray-500 mt-3">
Subscribe to our newsletter
</p>

<div className="flex justify-center mt-6 gap-3">
  <input
    type="email"
    placeholder="Enter your email"
    className="px-4 py-3 rounded-lg"
  />

  <button className="bg-black text-white px-6 py-3 rounded-lg">
    Subscribe
  </button>
</div>

</section></div>
  )
}

export default Newsletter