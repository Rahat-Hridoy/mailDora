import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans transition-colors duration-300">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold tracking-tighter bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent hover:opacity-80 transition-opacity">
            mailDora
          </Link>
          <div className="flex items-center gap-4">
            <button className="hidden md:block px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Login
            </button>
            <button className="px-5 py-2 text-sm font-medium text-background bg-foreground rounded-full hover:opacity-90 transition-opacity">
              Sign Up
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-40 md:py-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] -z-10 dark:bg-blue-500/10 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-violet-500/20 rounded-full blur-[100px] -z-10 dark:bg-violet-500/10 pointer-events-none" />

        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 bg-linear-to-b from-foreground to-muted-foreground bg-clip-text text-transparent">
            Grow Your Business with <br />
            <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">Email Marketing</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
            Reach your audience, automate your campaigns, and track results with mailDora. The simplest way to turn subscribers into customers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-4 text-lg font-semibold text-primary-foreground bg-linear-to-r from-primary to-secondary rounded-full shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-105 transition-all duration-200">
              Start Email Campaigns
            </button>
            <button className="px-8 py-4 text-lg font-medium text-foreground bg-card border border-border rounded-full hover:bg-muted transition-all duration-200">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need to create, manage, and optimize your email marketing strategy.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="p-8 rounded-2xl bg-background hover:bg-muted transition-colors border border-muted group">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Campaign Automation</h3>
              <p className="text-muted-foreground leading-relaxed">
                Set up automated workflows that engage your customers at the perfect moment without lifting a finger.
              </p>
            </div>

            {/* Service 2 */}
            <div className="p-8 rounded-2xl bg-background hover:bg-muted transition-colors border border-muted group">
              <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Advanced Analytics</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Track open rates, click-throughs, and conversions with our beautiful, real-time data dashboards.
              </p>
            </div>

            {/* Service 3 */}
            <div className="p-8 rounded-2xl bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors border border-slate-100 dark:border-slate-800/50 group">
              <div className="w-14 h-14 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-7 h-7 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Audience Targeting</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Segment your users with precision tools to ensure the right message reaches the right person.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-card rounded-3xl p-10 md:p-16 shadow-xl shadow-muted/50 dark:shadow-none text-center">
            <h2 className="text-3xl font-bold mb-6">About mailDora</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              We believe that powerful email marketing shouldn't be complicated. mailDora was built with a single mission: to empower businesses of all sizes to grow through simple, automated, and effective email campaigns. Tailored for modern needs, we focus on what matters most—your growth.
            </p>
            <div className="inline-block p-[2px] rounded-full bg-linear-to-r from-primary to-secondary">
              <div className="bg-card rounded-full px-6 py-2">
                 <span className="text-sm font-semibold bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
                   Trusted by 10,000+ Businesses
                 </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-linear-to-br from-primary to-secondary text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to get started?</h2>
          <p className="text-blue-100 text-xl mb-10 max-w-2xl mx-auto">
            Join thousands of marketers who are already growing their business with mailDora.
          </p>
          <div className="flex flex-col items-center gap-4">
            <p className="text-blue-200 font-medium tracking-wide uppercase text-sm">Contact Us</p>
            <a href="mailto:hello@maildora.com" className="text-3xl md:text-4xl font-bold hover:text-blue-200 transition-colors border-b-2 border-transparent hover:border-blue-200">
              hello@maildora.com
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-2xl font-bold text-white">mailDora</div>
          <div className="text-sm">
            &copy; {new Date().getFullYear()} mailDora. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}