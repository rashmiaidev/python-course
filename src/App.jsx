import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Button } from '@/components/ui/button.jsx';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx';
import { Badge } from '@/components/ui/badge.jsx';
import { BookOpen, Code, Database, Zap, Users, Star, ArrowRight, Download, ExternalLink } from 'lucide-react';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/modules" element={<ModulesPage />} />
          <Route path="/workbooks" element={<WorkbooksPage />} />
          <Route path="/challenges" element={<ChallengesPage />} />
        </Routes>
      </div>
    </Router>
  );
}

function HomePage() {
  return (
    <div>
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <Code className="h-8 w-8 text-blue-600" />
                <span className="ml-2 text-xl font-bold text-gray-900">PyAPI Course</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#modules" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Modules</a>
              <a href="#workbooks" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Workbooks</a>
              <a href="#challenges" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Challenges</a>
              <Button className="bg-blue-600 hover:bg-blue-700">Get Started</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Master Python, FastAPI & SQL
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              A comprehensive course designed to take you from Python basics to building production-ready APIs with FastAPI and SQL databases. Perfect for beginners and intermediate developers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Start Learning <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                View Curriculum
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose This Course?</h2>
            <p className="text-lg text-gray-600">Comprehensive, practical, and designed for real-world application</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <BookOpen className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Structured Learning</CardTitle>
                <CardDescription>
                  Progressive curriculum from beginner to advanced levels with clear learning objectives
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Code className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle>Hands-on Practice</CardTitle>
                <CardDescription>
                  Interactive workbooks and coding challenges to reinforce your learning
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Zap className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <CardTitle>Modern Technologies</CardTitle>
                <CardDescription>
                  Learn the latest tools and frameworks used in professional development
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Course Levels */}
      <section id="modules" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Course Structure</h2>
            <p className="text-lg text-gray-600">Three comprehensive levels to take you from zero to hero</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="relative overflow-hidden">
              <CardHeader>
                <Badge className="w-fit mb-2 bg-green-100 text-green-800">Beginner</Badge>
                <CardTitle className="text-xl">Python Fundamentals</CardTitle>
                <CardDescription>
                  Master Python basics, syntax, data structures, and database fundamentals
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Python syntax and data types</li>
                  <li>• Control flow and functions</li>
                  <li>• Data structures (lists, dicts, sets)</li>
                  <li>• Introduction to SQL and SQLite</li>
                </ul>
                <Button className="w-full mt-4" variant="outline">
                  View Modules
                </Button>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden">
              <CardHeader>
                <Badge className="w-fit mb-2 bg-blue-100 text-blue-800">Intermediate</Badge>
                <CardTitle className="text-xl">OOP & FastAPI Basics</CardTitle>
                <CardDescription>
                  Object-oriented programming, advanced SQL, and FastAPI fundamentals
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Object-oriented programming</li>
                  <li>• Advanced SQL queries and joins</li>
                  <li>• FastAPI introduction</li>
                  <li>• API development basics</li>
                </ul>
                <Button className="w-full mt-4" variant="outline">
                  View Modules
                </Button>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden">
              <CardHeader>
                <Badge className="w-fit mb-2 bg-purple-100 text-purple-800">Advanced</Badge>
                <CardTitle className="text-xl">Production-Ready APIs</CardTitle>
                <CardDescription>
                  Advanced FastAPI features, authentication, deployment, and best practices
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Async programming</li>
                  <li>• Authentication & authorization</li>
                  <li>• SQLAlchemy ORM</li>
                  <li>• Deployment & monitoring</li>
                </ul>
                <Button className="w-full mt-4" variant="outline">
                  View Modules
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Learning Resources</h2>
            <p className="text-lg text-gray-600">Everything you need to succeed in your learning journey</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <div className="flex items-center">
                  <BookOpen className="h-8 w-8 text-blue-600 mr-3" />
                  <div>
                    <CardTitle>Interactive Workbooks</CardTitle>
                    <CardDescription>Practice exercises and hands-on projects</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Comprehensive workbooks with exercises, examples, and step-by-step guidance for each module.
                </p>
                <Button variant="outline" className="w-full">
                  <Download className="mr-2 h-4 w-4" />
                  Download Workbooks
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center">
                  <Code className="h-8 w-8 text-green-600 mr-3" />
                  <div>
                    <CardTitle>Coding Challenges</CardTitle>
                    <CardDescription>LeetCode and GeeksforGeeks problems</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Curated coding challenges from popular platforms to reinforce your learning and improve problem-solving skills.
                </p>
                <Button variant="outline" className="w-full">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Challenges
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">8</div>
              <div className="text-blue-100">Comprehensive Modules</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Practice Exercises</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">30+</div>
              <div className="text-blue-100">Coding Challenges</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-blue-100">Practical Focus</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Code className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-xl font-bold">PyAPI Course</span>
            </div>
            <p className="text-gray-400 mb-4">
              Master Python, FastAPI, and SQL with our comprehensive development course
            </p>
            <p className="text-gray-500 text-sm">
              © 2025 PyAPI Course. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ModulesPage() {
  return <div>Modules Page - Coming Soon</div>;
}

function WorkbooksPage() {
  return <div>Workbooks Page - Coming Soon</div>;
}

function ChallengesPage() {
  return <div>Challenges Page - Coming Soon</div>;
}

export default App;

