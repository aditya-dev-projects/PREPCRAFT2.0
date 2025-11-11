import { Link } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Target, Brain } from "lucide-react";
import { allSubjects } from "@/subjects"; // Use allSubjects to get the array

const subjectIcons = {
  development: <BookOpen className="h-8 w-8 text-primary" />,
  dsa: <Target className="h-8 w-8 text-primary" />,
  aptitude: <Brain className="h-8 w-8 text-primary" />,
};

export default function Explore() {
  return (
    <div className="container py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Explore Subjects</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Choose a subject to start learning, practicing, and conquering.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allSubjects.map((subject) => (
          // FIX: Corrected the 'to' prop to only use subject.id
          <Link to={`/learn/${subject.id}`} key={subject.id}>
            <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
              <CardHeader className="items-center text-center">
                <div className="p-4 bg-primary/10 rounded-full mb-4">
                  {subjectIcons[subject.id as keyof typeof subjectIcons]}
                </div>
                <CardTitle className="text-2xl font-bold">{subject.title}</CardTitle>
                <CardDescription>{subject.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-end">
                <Button className="w-full mt-4">
                  Start Learning <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}