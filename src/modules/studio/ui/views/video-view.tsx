import { FormSection } from "../sections/form-section";

interface PageProps {
  videoId: string;
}

export const VideoView = ({ videoId }: PageProps) => {
  return (
    <div className="px-4 pt-2.5 ma-screen-lg">
      <FormSection videoId={videoId} />
    </div>
  );
};
