import mongoose, { Schema, Document, Model } from "mongoose";

interface ISubSection extends Document {
  subSectionId?: number;
  title?: string;
  subTitle?: string;
  description?: string;
  shortDescription?: string;
  subSectionsImages?: string[];
}

interface ISection extends Document {
  sectionId?: number;
  name?: string;
  title?: string;
  subTitle?: string;
  description?: string;
  shortDescription?: string;
  sectionsImages?: string[];
  type?: string;
  cta?: string;
  subSections?: ISubSection[];
}

interface IPage extends Document {
  pageId?: number;
  name?: string;
  pageSlug?: string;
  metaDetails?: {
    title?: string;
    description?: string;
    keywords?: string;
    metaImages?: string;
    favicon?: string;
  };
  sections?: ISection[];
}

interface IContent extends Document {
  pages?: IPage[];
}

const SubSectionSchema: Schema = new Schema({
  subSectionId: { type: Number, required: false },
  title: { type: String, required: false },
  subTitle: { type: String, required: false },
  description: { type: String, required: false },
  shortDescription: { type: String, required: false },
  subSectionsImages: [{ type: String, required: false }],
});

const SectionSchema: Schema = new Schema({
  sectionId: { type: Number, required: false },
  name: { type: String, required: false },
  title: { type: String, required: false },
  subTitle: { type: String, required: false },
  description: { type: String, required: false },
  shortDescription: { type: String, required: false },
  sectionsImages: [{ type: String, required: false }],
  type: { type: String, required: false },
  cta: { type: String, required: false },
  subSections: [SubSectionSchema],
});

const PageSchema: Schema = new Schema({
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
  sections: [SectionSchema],
});

const ContentSchema: Schema = new Schema({
  pages: [PageSchema],
}, { timestamps: true });

let Content: Model<IContent>;

try {
  // Try to retrieve the model if it exists
  Content = mongoose.model<IContent>("Content");
} catch {
  // If it doesn't exist, create and compile the model
  Content = mongoose.model<IContent>("Content", ContentSchema);
}

export default Content;
