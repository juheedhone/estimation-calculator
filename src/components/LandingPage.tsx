import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex flex-col items-center">
      {/* Hero Section */}
      <section className="text-center py-10">
        <h1 className="text-4xl font-bold">
          Boost Productivity with Accurate Task Time Estimates
        </h1>
        <p className="text-lg text-gray-600 mt-4">
          Track & Plan Your Work Efficiently
        </p>
        <Link href="/tracker">
          <Button className="mt-6 px-6 py-3 text-lg">Try It for Free</Button>
        </Link>

        <div className="mt-10"></div>
      </section>
      {/* Features Section */}
      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 px-10 py-5">
        {[
          "Accurate Time Estimation",
          "Data Insights",
          "Easy Task Management",
          "Cloud-Based & Responsive",
        ].map((feature, index) => (
          <Card key={index} className="p-6 shadow-lg rounded-xl bg-white">
            <CardContent>
              <h3 className="text-xl font-semibold">{feature}</h3>
              <p className="text-gray-600 mt-2">
                Predict and track task durations.
              </p>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* How It Works */}
      <section className="text-center py-20 px-10">
        <h2 className="text-3xl font-bold">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {["Add a Task", "Estimate Time", "Track & Optimize"].map(
            (step, index) => (
              <Card key={index} className="p-6 shadow-lg rounded-xl bg-white">
                <CardContent>
                  <h3 className="text-xl font-semibold">{step}</h3>
                  <p className="text-gray-600 mt-2">Brief explanation.</p>
                </CardContent>
              </Card>
            )
          )}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-10 text-center bg-gray-200 w-full">
        <h2 className="text-3xl font-bold">What Users Say</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {[
            "This tool saved me hours of work!",
            "A must-have for productivity.",
            "Great for freelancers and teams!",
          ].map((review, index) => (
            <motion.div
              key={index}
              className="p-6 shadow-lg rounded-xl bg-white"
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-gray-600">{review}</p>
              <p className="mt-4 text-gray-800 font-semibold">
                - User {index + 1}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="text-center py-20">
        <h2 className="text-3xl font-bold">
          Get Started for Free – No Credit Card Required!
        </h2>
        <Button className="mt-6 px-6 py-3 text-lg">
          Start Estimating Time
        </Button>
      </section>
    </div>
  );
}
