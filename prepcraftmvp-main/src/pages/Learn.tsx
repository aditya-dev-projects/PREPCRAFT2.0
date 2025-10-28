import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { 
  ArrowLeft,
  Menu,
  X,
  FileText,
  Code,
  HelpCircle,
  CheckCircle2,
  Trophy,
  ChevronDown
} from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { getSubjectBySlug } from "@/subjects";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent } from "@/components/ui/sheet";

const SidebarContent = ({ subject, activeTab, setActiveTab, openNoteChapter, setOpenNoteChapter, openPracticeChapter, setOpenPracticeChapter, openQuizChapter, setOpenQuizChapter, handleNoteSubchapterClick, handlePracticeSubchapterClick, handleQuizSubchapterClick, noteMeta, problemMeta, quizMeta, isCompleted, isMobile, setSidebarOpen }) => (
  <div className="p-4">
    <div className="flex items-center justify-between mb-6">
      <h2 className="font-semibold text-lg">Contents</h2>
      {isMobile && <Button variant="ghost" size="sm" onClick={() => setSidebarOpen(false)}><X className="h-4 w-4" /></Button>}
    </div>

    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
      <TabsList className="w-full grid grid-cols-3 mb-4">
        <TabsTrigger value="notes" className="text-xs"><FileText className="h-3 w-3 mr-1" />Notes</TabsTrigger>
        <TabsTrigger value="practice" className="text-xs"><Code className="h-3 w-3 mr-1" />Practice</TabsTrigger>
        <TabsTrigger value="quiz" className="text-xs"><HelpCircle className="h-3 w-3 mr-1" />Quiz</TabsTrigger>
      </TabsList>

      <TabsContent value="notes" className="space-y-2 mt-0">
        {subject.chapters.map((chapter) => (
          <Collapsible key={chapter.id} open={openNoteChapter === chapter.id} onOpenChange={() => setOpenNoteChapter(openNoteChapter === chapter.id ? null : chapter.id)}>
            <CollapsibleTrigger className="w-full">
              <div className="flex items-center justify-between p-3 rounded-lg transition-colors hover:bg-muted">
                <span className="text-sm font-semibold">{chapter.title}</span>
                <ChevronDown className={`h-5 w-5 transition-transform ${openNoteChapter === chapter.id ? 'rotate-180' : ''}`} />
              </div>
            </CollapsibleTrigger>
            <CollapsibleContent className="pl-4 mt-1 space-y-1">
              {chapter.subchapters.map((subchapter: any) => (
                <button key={subchapter.id} onClick={() => { handleNoteSubchapterClick(subchapter.noteId); if (isMobile) setSidebarOpen(false); }} className={`w-full text-left p-2.5 rounded-md transition-colors text-sm ${noteMeta?.id === subchapter.noteId ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'}`}>
                  <div className="flex items-center justify-between">
                    <span>{subchapter.title}</span>
                    {isCompleted(subchapter.noteId) && <CheckCircle2 className="h-4 w-4 text-success" />}
                  </div>
                </button>
              ))}
            </CollapsibleContent>
          </Collapsible>
        ))}
      </TabsContent>

      <TabsContent value="practice" className="space-y-2 mt-0">
        {subject.practiceChapters.map((chapter) => (
          <Collapsible key={chapter.id} open={openPracticeChapter === chapter.id} onOpenChange={() => setOpenPracticeChapter(openPracticeChapter === chapter.id ? null : chapter.id)}>
            <CollapsibleTrigger className="w-full">
              <div className="flex items-center justify-between p-3 rounded-lg transition-colors hover:bg-muted">
                <span className="text-sm font-semibold">{chapter.title}</span>
                <ChevronDown className={`h-5 w-5 transition-transform ${openPracticeChapter === chapter.id ? 'rotate-180' : ''}`} />
              </div>
            </CollapsibleTrigger>
            <CollapsibleContent className="pl-4 mt-1 space-y-1">
              {chapter.subchapters.map((subchapter: any) => (
                <button key={subchapter.id} onClick={() => { handlePracticeSubchapterClick(subchapter.problemId); if (isMobile) setSidebarOpen(false); }} className={`w-full text-left p-2.5 rounded-md transition-colors text-sm ${problemMeta?.id === subchapter.problemId ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'}`}>
                  <div className="flex items-center justify-between">
                    <span>{subchapter.title}</span>
                    {isCompleted(subchapter.problemId) && <CheckCircle2 className="h-4 w-4 text-success" />}
                  </div>
                </button>
              ))}
            </CollapsibleContent>
          </Collapsible>
        ))}
      </TabsContent>

      <TabsContent value="quiz" className="space-y-2 mt-0">
        {subject.quizChapters.map((chapter) => (
          <Collapsible key={chapter.id} open={openQuizChapter === chapter.id} onOpenChange={() => setOpenQuizChapter(openQuizChapter === chapter.id ? null : chapter.id)}>
            <CollapsibleTrigger className="w-full">
              <div className="flex items-center justify-between p-3 rounded-lg transition-colors hover:bg-muted">
                <span className="text-sm font-semibold">{chapter.title}</span>
                <ChevronDown className={`h-5 w-5 transition-transform ${openQuizChapter === chapter.id ? 'rotate-180' : ''}`} />
              </div>
            </CollapsibleTrigger>
            <CollapsibleContent className="pl-4 mt-1 space-y-1">
              {chapter.subchapters.map((subchapter: any) => (
                <button key={subchapter.id} onClick={() => { handleQuizSubchapterClick(subchapter.quizId); if (isMobile) setSidebarOpen(false); }} className={`w-full text-left p-2.5 rounded-md transition-colors text-sm ${quizMeta?.id === subchapter.quizId ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'}`}>
                  <div className="flex items-center justify-between">
                    <span>{subchapter.title}</span>
                    {isCompleted(subchapter.quizId) && <CheckCircle2 className="h-4 w-4 text-success" />}
                  </div>
                </button>
              ))}
            </CollapsibleContent>
          </Collapsible>
        ))}
      </TabsContent>
    </Tabs>
  </div>
);

export default function Learn() {
  const { subject: subjectSlug } = useParams<{ subject: string }>();
  const { user } = useAuth();
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  
  const [sidebarOpen, setSidebarOpen] = useState(!isMobile);
  const [activeTab, setActiveTab] = useState("notes");
  const [selectedNote, setSelectedNote] = useState<number | null>(null);
  const [selectedProblem, setSelectedProblem] = useState<number | null>(null);
  const [selectedQuiz, setSelectedQuiz] = useState<number | null>(null);
  const [openNoteChapter, setOpenNoteChapter] = useState<number | null>(null);
  const [openPracticeChapter, setOpenPracticeChapter] = useState<number | null>(null);
  const [openQuizChapter, setOpenQuizChapter] = useState<number | null>(null);
  const [progress, setProgress] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (subjectSlug && user) {
      fetchProgress();
      updateLastVisited();
    }
  }, [subjectSlug, user]);

  useEffect(() => {
    if (isMobile) {
      setSidebarOpen(false);
    } else {
      setSidebarOpen(true);
    }
  }, [isMobile]);

  const subject = getSubjectBySlug(subjectSlug || '');

  const fetchProgress = async () => {
    if (!subject) return;
    console.log('subjectId:', subject.id);
    try {
      const { data } = await supabase
        .from('progress')
        .select('*')
        .eq('user_id', user?.id)
        .eq('subject_id', subject.id)
        .maybeSingle();

      if (data) {
        setProgress(data);
      } else {
        const { data: newProgress } = await supabase
          .from('progress')
          .insert({ user_id: user?.id, subject_id: subject.id, completed_lessons: [], percent: 0 })
          .select()
          .single();
        setProgress(newProgress);
      }
    } catch (error) {
      console.error('Error fetching progress:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateLastVisited = async () => {
    try {
      await supabase.rpc('update_user_streak', { user_id_param: user?.id });
      await supabase.from('profiles').update({ last_visited: `/learn/${subjectSlug}` }).eq('id', user?.id);
    } catch (error) {
      console.error('Error updating last visited:', error);
    }
  };

  const handleComplete = async (itemId: string) => {
    if (!progress || !user || !subject) return;
    const completedLessons = progress.completed_lessons || [];
    if (completedLessons.includes(itemId)) {
      toast.info("Already completed");
      return;
    }
    const totalItems = (subject?.notes.length || 0) + (subject?.practiceProblems.reduce((acc, p) => acc + (Array.isArray(p.meta.items) ? p.meta.items.length : 0), 0) || 0) + (subject?.quizzes.length || 0);
    const newCompleted = [...completedLessons, itemId];
    const newPercent = (newCompleted.length / totalItems) * 100;
    try {
      await supabase.rpc('update_user_streak', { user_id_param: user.id });
      await supabase.from('progress').update({ completed_lessons: newCompleted, percent: newPercent, last_accessed: new Date().toISOString() }).eq('user_id', user.id).eq('subject_id', subject.id);
      toast.success(`Progress updated!`);
      fetchProgress();
    } catch (error) {
      console.error('Error:', error);
      toast.error("Failed to update progress");
    }
  };

  const handleReset = async () => {
    if (!user || !subject) return;

    try {
      // Reset the progress for the subject
      await supabase
        .from('progress')
        .update({ completed_lessons: [], percent: 0 })
        .eq('user_id', user.id)
        .eq('subject_id', subject.id);

      toast.success("Progress for this subject has been reset.");
      fetchProgress();
    } catch (error) {
      console.error('Error resetting progress:', error);
      toast.error("Failed to reset progress.");
    }
  };

  if (loading) {
    return <div className="container py-8"><Skeleton className="h-8 w-64 mb-8" /><Skeleton className="h-96" /></div>;
  }

  if (!subject) {
    return (
      <div className="container py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Subject not found</h2>
        <Button onClick={() => navigate('/explore')}><ArrowLeft className="mr-2 h-4 w-4" />Back to Explore</Button>
      </div>
    );
  }

  const NoteComponent = selectedNote !== null ? subject.notes[selectedNote]?.component : null;
  const noteMeta = selectedNote !== null ? subject.notes[selectedNote]?.meta : null;
  
  const ProblemComponent = selectedProblem !== null ? subject.practiceProblems[selectedProblem]?.component : null;
  const problemMeta = selectedProblem !== null ? subject.practiceProblems[selectedProblem]?.meta : null;
  
  const QuizComponent = selectedQuiz !== null ? subject.quizzes[selectedQuiz]?.component : null;
  const quizMeta = selectedQuiz !== null ? subject.quizzes[selectedQuiz]?.meta : null;

  const isCompleted = (id: string) => progress?.completed_lessons?.includes(id);

  const handleNoteSubchapterClick = (noteId: string) => {
    const noteIndex = subject.notes.findIndex(note => note.meta.id === noteId);
    if (noteIndex !== -1) setSelectedNote(noteIndex);
  };

  const handlePracticeSubchapterClick = (problemId: string) => {
    const problemIndex = subject.practiceProblems.findIndex(p => p.meta.id === problemId);
    if (problemIndex !== -1) setSelectedProblem(problemIndex);
  };

  const handleQuizSubchapterClick = (quizId: string) => {
    const quizIndex = subject.quizzes.findIndex(q => q.meta.id === quizId);
    if (quizIndex !== -1) setSelectedQuiz(quizIndex);
  };

  const sidebarProps = { subject, activeTab, setActiveTab, openNoteChapter, setOpenNoteChapter, openPracticeChapter, setOpenPracticeChapter, openQuizChapter, setOpenQuizChapter, handleNoteSubchapterClick, handlePracticeSubchapterClick, handleQuizSubchapterClick, noteMeta, problemMeta, quizMeta, isCompleted, isMobile, setSidebarOpen };

  return (
    <div className="h-screen flex overflow-hidden">
      {isMobile ? (
        <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
          <SheetContent side="left" className="w-72 p-0 overflow-y-auto">
            <SidebarContent {...sidebarProps} />
          </SheetContent>
        </Sheet>
      ) : (
        <aside className={`w-72 transition-[margin-left] duration-300 ease-in-out ${sidebarOpen ? 'ml-0' : '-ml-72'} border-r bg-card flex-shrink-0 h-full overflow-y-auto`}>
          <SidebarContent {...sidebarProps} />
        </aside>
      )}

      <main className="flex-1 h-full overflow-y-auto">
        <div className="container py-6">
          <div className="flex items-center gap-4 mb-6">
            {isMobile && !sidebarOpen && <Button variant="outline" size="sm" onClick={() => setSidebarOpen(true)}><Menu className="h-4 w-4" /></Button>}
            {!isMobile && <Button variant="outline" size="sm" onClick={() => setSidebarOpen(!sidebarOpen)}><Menu className="h-4 w-4" /></Button>}
            <Button variant="ghost" onClick={() => navigate('/explore')} size="sm"><ArrowLeft className="mr-2 h-4 w-4" />Back</Button>
            <div>
              <h1 className="text-2xl font-bold">{subject.title}</h1>
              <p className="text-sm text-muted-foreground">{subject.description}</p>
            </div>
          </div>

          <Card>
            <CardContent className="p-6">
              {activeTab === 'notes' && NoteComponent && (
                <div>
                  <NoteComponent />
                  {noteMeta && (
                    <div className="mt-8 pt-6 border-t flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground"><Trophy className="h-4 w-4" /><span>{noteMeta.points} points</span><Badge variant="secondary">{noteMeta.difficulty}</Badge></div>
                      {isCompleted(noteMeta.id) ? (
                        <Button variant="destructive" onClick={handleReset}>Reset Point</Button>
                      ) : (
                        <Button onClick={() => handleComplete(noteMeta.id, noteMeta.points)}>
                          Mark Complete
                        </Button>
                      )}
                    </div>
                  )}
                </div>
              )}

              {activeTab === 'practice' && ProblemComponent && (
                <div><ProblemComponent /></div>
              )}

              {activeTab === 'quiz' && QuizComponent && (
                <div>
                  <QuizComponent />
                  {quizMeta && (
                    <div className="mt-8 pt-6 border-t flex items-center justify-between">
                      {isCompleted(quizMeta.id) ? (
                        <Button variant="destructive" onClick={handleReset}>Reset Progress</Button>
                      ) : (
                        <Button onClick={() => handleComplete(quizMeta.id)}>
                          Mark as Completed
                        </Button>
                      )}
                    </div>
                  )}
                </div>
              )}

              {activeTab === 'notes' && !NoteComponent && <div className="text-center py-12"><FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" /><p className="text-muted-foreground">Select a note from the sidebar.</p></div>}
              {activeTab === 'practice' && !ProblemComponent && <div className="text-center py-12"><Code className="h-12 w-12 text-muted-foreground mx-auto mb-4" /><p className="text-muted-foreground">Select a practice problem from the sidebar.</p></div>}
              {activeTab === 'quiz' && !QuizComponent && <div className="text-center py-12"><HelpCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" /><p className="text-muted-foreground">Select a quiz from the sidebar.</p></div>}
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
