export default function ParseHTML({ data }: { data: string }) {
  return <div dangerouslySetInnerHTML={{ __html: data }} />;
}
