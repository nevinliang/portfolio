export const metadata = {
  title: 'About',
  description: 'Learn more about me.',
}

export default function About() {
  return (
    <section className="prose">
    <h1>About</h1>
        <h2>Experience</h2>
          <h4>Leafpress, 2024-Present</h4>
          <ul>
            <li>Full Stack Development</li>
          </ul>
          <h4>Verkada, 2022-2023</h4>
          <ul>
            <li>Designed and implemented a new device featuring a touchscreen interface, speaker array, integrated camera, and siren.</li>
            <li>Leveraged Kotlin and Android Open Source Project (AOSP) firmware</li>
            <li>Employed React Native, Golang (on-device services), and C/Java (Android firmware)</li>
            <li>Collaborated with a team of 2 to launch the product in under 8 months</li>
            <li>Successfully developed a complementary, streamlined sibling device within a 2-month timeframe</li>
          </ul>
          <h4>Microsoft, 2022</h4>
          <ul>
            <li>Developed and maintained code for in-house and client websites primarily using HTML, CSS, Sass, JavaScript, and jQuery</li>
            <li>Manually tested sites in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness</li>
          </ul>
          <h4>Tesla, 2021</h4>
          <ul>
            <li>Created dev tools for the Plaid and Cybertruck Infotainment System (driver/passenger tablet). Made use of FreeRTOS, SocketCAN</li>
          </ul>
        <h2>Education</h2>
          <h4>MS in Electrical Engineering</h4>
          <p>University of California, Los Angeles, 2022-2023</p>
          <h4>BS in Computer Science and Engineering</h4>
          <p>University of California, Los Angeles, 2020-2022</p>
        <h2>Honors</h2>
        <ul>
          <li>USAMO Qualifier (5x), USA(J)MO Honorable Mention</li>
          <li>USAPhO Silver Medal</li>
          <li>USACO Platinum 2016-2020, CodeForces Candidate Master Rank</li>
          <li>Sandia National Laboratories Space Blimp Hackathon 2nd Place</li>
          <li>MIT Trading Competition Poker Tournament First Place</li>
        </ul>
    </section>

  );
}