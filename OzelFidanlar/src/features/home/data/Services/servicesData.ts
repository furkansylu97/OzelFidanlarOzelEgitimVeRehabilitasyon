import {
  FaUsers,
  FaUserGraduate,
  FaBookOpen,
  FaHandsHelping,
} from "react-icons/fa";

import type { IconType } from "react-icons";

export interface ServiceCategory {
  label: string;
  slug: string;
  description: string;
  icon: IconType;
}

export const servicesData: ServiceCategory[] = [
  {
    label: "Aile Eğitimi ve Danışmanlık",
    slug: "family-education-counseling",
    description:
      "Ailelerin çocuklarının gelişim sürecini daha sağlıklı yönetebilmeleri için bilinçlendirme, rehberlik ve danışmanlık hizmetleri sunulur.",
    icon: FaUsers,
  },
  {
    label: "Ergenlik Dönemi Danışmanlığı",
    slug: "aadolescent-counseling",
    description:
      "Ergenlik döneminde yaşanan duygusal, sosyal ve akademik zorluklara yönelik destekleyici danışmanlık programları.",
    icon: FaUserGraduate,
  },
  {
    label: "Akademik Beceri Eğitimi",
    slug: "academic-skills-education",
    description:
      "Dikkat, öğrenme, planlama ve ders çalışma becerilerini geliştirmeye yönelik bireysel ve yapılandırılmış eğitimler.",
    icon: FaBookOpen,
  },
  {
    label: "Rehberlik ve Psikolojik Danışmanlık",
    slug: "guidance-psychological-counseling",
    description:
      "Bireylerin duygusal, sosyal ve psikolojik iyi oluşlarını desteklemeyi amaçlayan profesyonel danışmanlık hizmetleri.",
    icon: FaHandsHelping,
  },
];
