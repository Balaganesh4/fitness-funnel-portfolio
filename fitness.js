import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Title */}
        <h1 className="text-3xl font-bold text-center text-blue-700">
          📦 Done-For-You Funnel Portfolio
        </h1>
        <p className="text-center text-gray-600">
          Demo project showcasing a full funnel package for a fictional client.
        </p>

        {/* Client Info */}
        <Card className="shadow-lg">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">
              Client (Fictional): FitPro Coaching
            </h2>
            <p className="text-gray-700 mb-2">
              <strong>Goal:</strong> Generate leads and convert them into paying clients for a “12-Week Fat Loss Program”.
            </p>
          </CardContent>
        </Card>

        {/* Sections */}
        <Card className="shadow-md">
          <CardContent className="p-6 space-y-6">
            {/* Landing Page */}
            <div>
              <h3 className="text-lg font-semibold text-blue-500">Landing Page Copy</h3>
              <ul className="list-disc pl-5 text-gray-700">
                <li>Headline: 🔥 Lose 10 Kilos in Just 12 Weeks — Without Starving or Spending Hours in the Gym</li>
                <li>Subheadline: Join 500+ clients who transformed their bodies with FitPro Coaching’s step-by-step program.</li>
                <li>CTA: 👉 Book Your Free Fitness Strategy Call Today</li>
                <li>Sections: Problem Hook, Benefits, Social Proof, Pricing CTA</li>
              </ul>
            </div>

            {/* Thank You Page */}
            <div>
              <h3 className="text-lg font-semibold text-blue-500">Thank-You Page Copy</h3>
              <ul className="list-disc pl-5 text-gray-700">
                <li>Headline: You’re Booked! 🎉</li>
                <li>Message: Your strategy session is confirmed. Please check your email for details. Bring a pen & paper — we’ll map your fat-loss plan together.</li>
              </ul>
            </div>

            {/* Email Sequence */}
            <div>
              <h3 className="text-lg font-semibold text-blue-500">5-Email Nurture Sequence</h3>
              <ul className="list-disc pl-5 text-gray-700">
                <li>Email 1 – Welcome: Thank them, confirm booking, explain what to expect.</li>
                <li>Email 2 – Story: Success story of a client who lost 12 kilos in 3 months.</li>
                <li>Email 3 – Value: Educational content + booking CTA.</li>
                <li>Email 4 – Offer: Urgency + social proof.</li>
                <li>Email 5 – Close: Final chance CTA.</li>
              </ul>
            </div>

            {/* Ads */}
            <div>
              <h3 className="text-lg font-semibold text-blue-500">Facebook / Instagram Ad Copy</h3>
              <ul className="list-disc pl-5 text-gray-700">
                <li>Ad Headline: Lose 10 Kilos in 12 Weeks — No Crazy Diets 🚀</li>
                <li>Ad Body: Tired of fad diets? FitPro Coaching has helped 500+ people transform with simple meal plans and short workouts. Book a free call today!</li>
                <li>CTA Button: Book Free Call</li>
              </ul>
            </div>

            {/* Webinar */}
            <div>
              <h3 className="text-lg font-semibold text-blue-500">Webinar Script (Mini-Sales Presentation)</h3>
              <ul className="list-disc pl-5 text-gray-700">
                <li>Title: 3 Fat-Loss Secrets Doctors Don’t Tell You</li>
                <li>Outline: 1) Why calorie-counting fails, 2) Short daily workouts, 3) Accountability system.</li>
                <li>Closing Script: If you’re serious about transforming in 12 weeks, apply today. Only 10 spots available each month.</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Outro */}
        <div className="text-center">
          <p className="text-gray-700 font-medium">
            ✅ This example demonstrates the structure of a DFY Funnel Package. Your business will receive fully customized deliverables tailored to your goals.
          </p>
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl shadow">
            Work With Me
          </Button>
        </div>
      </div>
    </div>
  );
}
