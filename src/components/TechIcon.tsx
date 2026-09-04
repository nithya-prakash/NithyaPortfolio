import type { IconType } from "react-icons";
import {
  SiPython,
  SiPytorch,
  SiScikitlearn,
  SiDocker,
  SiGit,
  SiGithub,
  SiLinux,
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiRedis,
  SiFastapi,
  SiQdrant,
  SiSqlite,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiBootstrap,
  SiSpringboot,
  SiMysql,
  SiCelery,
  SiPrometheus,
  SiHuggingface,
  SiApachekafka,
  SiMqtt,
  SiInfluxdb,
  SiKubernetes,
} from "react-icons/si";

const iconMap: Record<string, IconType> = {
  Python: SiPython,
  PyTorch: SiPytorch,
  "scikit-learn": SiScikitlearn,
  Docker: SiDocker,
  Git: SiGit,
  GitHub: SiGithub,
  Linux: SiLinux,
  "Next.js": SiNextdotjs,
  React: SiReact,
  TypeScript: SiTypescript,
  "Tailwind CSS": SiTailwindcss,
  PostgreSQL: SiPostgresql,
  Redis: SiRedis,
  FastAPI: SiFastapi,
  Qdrant: SiQdrant,
  SQLite: SiSqlite,
  JavaScript: SiJavascript,
  HTML: SiHtml5,
  CSS: SiCss,
  Bootstrap: SiBootstrap,
  "Spring Boot": SiSpringboot,
  MySQL: SiMysql,
  Celery: SiCelery,
  Prometheus: SiPrometheus,
  Transformers: SiHuggingface,
  Kafka: SiApachekafka,
  MQTT: SiMqtt,
  InfluxDB: SiInfluxdb,
  Kubernetes: SiKubernetes,
};

export default function TechIcon({
  name,
  size = 14,
  className = "",
}: {
  name: string;
  size?: number;
  className?: string;
}) {
  const Icon = iconMap[name];
  if (!Icon) return null;
  return <Icon size={size} className={className} aria-hidden />;
}
