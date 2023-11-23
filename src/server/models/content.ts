import mongoose, { Schema } from "mongoose";

const contentSchema: Schema = new Schema({
  pages: [
    {
      pageId: { type: Number, required: false },
      name: { type: String, required: false },
      pageSlug: { type: String, required: false },
      metaDetails: {
        title: { type: String, required: false },
        description: { type: String, required: false },
        keywords: { type: String, required: false },
        metaImages: { type: String, required: false },
        favicon: { type: String, required: false },
      },
      sections: [
        {
          sectionId: { type: Number, required: false },
          name: { type: String, required: false },
          title: { type: String, required: false },
          subTitle: { type: String, required: false },
          description: { type: String, required: false },
          shortDescription: { type: String, required: false },
          sectionsImages: [{ type: String, required: false }],
          type: { type: String, required: false },
          cta: { type: String, required: false },
          subSections: [
            {
              subSectionId: { type: Number, required: false },
              title: { type: String, required: false },
              subTitle: { type: String, required: false },
              description: { type: String, required: false },
              shortDescription: { type: String, required: false },
              subSectionsImages: [{ type: String, required: false }],
            }
          ]
        },
      ]
    }
  ]
},
  { timestamps: true }
)
const Content = mongoose.model("Content", contentSchema);
export default Content;
