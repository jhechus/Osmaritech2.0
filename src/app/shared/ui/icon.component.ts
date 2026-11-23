import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import {
  ArrowRight, ArrowUpRight, Bot, BrainCircuit, Briefcase, Building2, CalendarClock, Check, CodeXml, Container, Cpu,
  Database, Download, Eye, FileText, Gauge, Github, GitBranch, GraduationCap, Heart, Layers, LayoutDashboard, Linkedin,
  Lock, LucideAngularModule, LucideIconData, Mail, MapPin, Menu, MessageCircle, Phone, Puzzle, Radio, Rocket, Send,
  Server, ShieldCheck, Sparkles, SquareKanban, Terminal, TestTubeDiagonal, User, Users, Wallet, Workflow, X, Zap,
  Wrench, Search, Clock, TrendingUp, Palette, RefreshCw, Globe, CircleHelp, Plus, MessageSquareText,
} from 'lucide-angular';

/** Nombres cortos → icono Lucide. Los archivos de datos usan estos nombres. */
const ICONS: Record<string, LucideIconData> = {
  arrow: ArrowRight, external: ArrowUpRight, bot: Bot, brain: BrainCircuit, briefcase: Briefcase, building: Building2,
  calendar: CalendarClock, check: Check, code: CodeXml, container: Container, cpu: Cpu, database: Database,
  download: Download, eye: Eye, file: FileText, gauge: Gauge, github: Github, branch: GitBranch, education: GraduationCap,
  heart: Heart, layers: Layers, layout: LayoutDashboard, linkedin: Linkedin, lock: Lock, mail: Mail, pin: MapPin,
  menu: Menu, chat: MessageCircle, phone: Phone, puzzle: Puzzle, radio: Radio, rocket: Rocket, send: Send, server: Server,
  shield: ShieldCheck, sparkles: Sparkles, kanban: SquareKanban, terminal: Terminal, test: TestTubeDiagonal, user: User,
  users: Users, wallet: Wallet, workflow: Workflow, close: X, zap: Zap,
  wrench: Wrench, search: Search, clock: Clock, chart: TrendingUp, palette: Palette, refresh: RefreshCw, globe: Globe,
  help: CircleHelp, plus: Plus, whatsapp: MessageSquareText,
};

@Component({
  selector: 'app-icon',
  imports: [LucideAngularModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'icon', 'aria-hidden': 'true' },
  template: `<lucide-icon [img]="data()" [size]="size()" [strokeWidth]="stroke()" />`,
  styles: `:host{display:inline-flex;line-height:0} :host ::ng-deep svg{display:block}`,
})
export class IconComponent {
  readonly name = input.required<string>();
  readonly size = input(20);
  readonly stroke = input(1.75);
  readonly data = computed(() => ICONS[this.name()] ?? Sparkles);
}
